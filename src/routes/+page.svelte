<script lang="ts">
	import {config} from '../config';
	let input: string = "";
	let lang: number = 1;
	let correct: boolean;

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
</script>

<main>
	<h1>{config.uitext.maintitle[lang]}</h1>
	<p>{config.uitext.subtitle[lang]}</p>
	<input bind:value={input} placeholder={config.uitext.inputplaceholder[lang]}>
</main>

<article>
	{#if input.length === 11 && correct}
		<h2>{config.uitext.results.resultstitle[lang]}</h2>
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
		<a href="https://manczak.net" class="author">
			<p>~ Jakub Mańczak, 2022</p>
			<img src="https://avatars.githubusercontent.com/u/56172798" alt="jakub mańczak in 2022">
		</a>
	</footer>
</article>