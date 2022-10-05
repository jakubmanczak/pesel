<script lang="ts">
	import {config} from '../config';
	let input: string = "";
	let lang: number = 1;
	let correct: boolean;
	let dateUnrealistic: boolean;
	let dateUnrealisticityWarning: string;

	function getPeselChecksum(inputstr: string){
		let result: number;
		result = (( Math.floor(parseInt(inputstr[0]))*1
		+ Math.floor(parseInt(inputstr[1]))*3
		+ Math.floor(parseInt(inputstr[2]))*7
		+ Math.floor(parseInt(inputstr[3]))*9
		+ Math.floor(parseInt(inputstr[4]))*1
		+ Math.floor(parseInt(inputstr[5]))*3
		+ Math.floor(parseInt(inputstr[6]))*7
		+ Math.floor(parseInt(inputstr[7]))*9
		+ Math.floor(parseInt(inputstr[8]))*1
		+ Math.floor(parseInt(inputstr[9]))*3) % 10);
		if(result === 0) return 0;
		else return (10 - result);
	}
	function evaluatePeselValidity(inputstr: string){
		for(let i = 0; i < inputstr.length; i++){
			if(parseInt(inputstr[i]) === NaN){
				return false;
			}
		}
		return (parseInt(inputstr[10]) === getPeselChecksum(inputstr));
	}
	$: correct = evaluatePeselValidity(input);

	function evaluateDateUnrealisticity(inputstr: string){
		let dobDay = parseInt(`${inputstr[4]}${inputstr[5]}`);
		let dobMonth = parseInt(`${(parseInt(input[2]) % 2) ? "1" : "0"}${input[3]}`);
		let dobYear = parseInt(`${calculateYear(inputstr)}${input[0]}${input[1]}`);
		let dobDayTooBig = false;
		
		if((dobMonth === 2 && dobDay > 28) || (dobMonth % 2 === (dobMonth < 8 ? 1 : 0) && dobDay > 31) || (dobMonth % 2 === (dobMonth < 8 ? 0 : 1) && dobDay > 30)){
			dobDayTooBig = true;
		}
		
		if(dobDayTooBig && dobMonth > 12){
			dateUnrealisticityWarning = config.uitext.realisticityWarnings.bothTooBig[lang];
			return true;
		}else if(dobDayTooBig){
			dateUnrealisticityWarning = config.uitext.realisticityWarnings.dayTooBig[lang];
			return true;
		}else if(dobMonth > 12){
			dateUnrealisticityWarning = config.uitext.realisticityWarnings.monthTooBig[lang];
			return true;
		}else if(dobYear > new Date().getFullYear()){
			dateUnrealisticityWarning = config.uitext.realisticityWarnings.yearInFuture[lang];
			return true;
		}
		
		return false;
		// true = unrealistic; false = realistic
	}
	$: dateUnrealistic = evaluateDateUnrealisticity(input);

	function calculateYear(inputstr: string){
		if(parseInt(inputstr[2]) === 0 || parseInt(inputstr[2]) === 1){
			return "19";
		}else if(parseInt(inputstr[2]) === 2 || parseInt(inputstr[2]) === 3){
			return "20";
		}else if(parseInt(inputstr[2]) === 4 || parseInt(inputstr[2]) === 5){
			return "21";
		}else if(parseInt(inputstr[2]) === 6 || parseInt(inputstr[2]) === 7){
			return "22";
		}else{
			return "18";
		}
	}
	function getSexIndex(inputstr: string){
		return (parseInt(inputstr[9]) % 2) ? 1 : 0;
	}
</script>

<main>
	<h1>{config.uitext.maintitle[lang]}</h1>
	<p>{config.uitext.subtitle[lang]}</p>
	<input bind:value={input} placeholder={config.uitext.inputplaceholder[lang]}>
</main>

<article>
	{#if input.length === 11 && correct}
		<h2>{config.uitext.results.resultstitle[lang]}</h2>
		<div class="grid">
			<div>
				<p>{config.uitext.results.dateofbirth[lang]}</p>
				<h1>{calculateYear(input)}{input[0]}{input[1]}{"-"}{(parseInt(input[2]) % 2) ? "1" : "0"}{input[3]}{"-"}{input[4]}{input[5]}</h1>
			</div>
			<div>
				<p>{config.uitext.results.serialnum[lang]}</p>
				<h1>{input[6]}{input[7]}{input[8]}{input[9]}</h1>
			</div>
			<div>
				<p>{config.uitext.results.biosexnum[lang]}</p>
				<h1>{config.uitext.results.biosexname[getSexIndex(input)][lang]}</h1>
			</div>
			<div>
				<p>{config.uitext.results.controlnum[lang]}</p>
				<h1>{input[10]}</h1>
			</div>
		</div>
		{#if dateUnrealistic}
			<p>{config.uitext.realisticityWarnings.warningPrefix[lang]} {dateUnrealisticityWarning}</p>
		{/if}
	{:else if input.length === 11 && !correct}
		<h2>{config.uitext.results.incorrect[lang]}</h2>
	{:else}
		<h4>{config.uitext.results.preresult[lang]}</h4>
		<p>{config.uitext.results.presubresult[lang]}</p>
	{/if}
	<footer>
		<p>
			{config.uitext.disclaimer[lang]}
		</p>
		<a href="https://manczak.net" data-tooltip="https://manczak.net" class="author">
			<p>~ Jakub Mańczak, 2022</p>
			<img src="https://avatars.githubusercontent.com/u/56172798" alt="jakub mańczak in 2022">
		</a>
	</footer>
</article>