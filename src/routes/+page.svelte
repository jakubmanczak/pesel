<script lang="ts">
	import {config} from '../config';
	let input: string = "";
	let lang: number = 1;
	let status: string = "";
	let correct: boolean = false;
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
			{config.uitext.results.disclaimer[lang]}
		</p>
		<a href="https://manczak.net" class="author">
			<p>~ Jakub Mańczak, 2022</p>
			<img src="https://avatars.githubusercontent.com/u/56172798" alt="jakub mańczak in 2022">
		</a>
	</footer>
</article>