<template>
	<h1 class="title">
		<span class="title--alt">We're</span>
		<span>coming</span>
		<span>soon</span>
	</h1>
	<p class="description">
		Hello fellow shoppers! We're currently building our new fashion store. Add
		your email below to stay up-to-date with annoucements and our launch deals.
	</p>
</template>

<script>
export default {
  name: "ComingSoon",
};
</script>

<style scoped>
.title {
	text-transform: uppercase;
	font-size: 3em;
	padding: 1.5em 0 0.2em;
	line-height: 1.3;
	font-weight: var(--fw-lg);
	color: var(--DarkGrayishRed);
	letter-spacing: 4px;
}
@media (min-width: 400px) {
	.title {
		letter-spacing: 12px;
	}
}
.title span {
	display: block;
}
.title--alt {
	font-weight: var(--fw-xsm);
	color: var(--DesaturatedRed);
}
.description {
	color: var(--DesaturatedRed);
	line-height: 1.4;
}
</style>
