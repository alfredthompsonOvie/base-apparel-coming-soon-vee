<template>
	<div class="container">
		<section>
			<header>
				<img src="@/assets/logo.svg" alt="" />
			</header>
			<div class="hero"></div>
			<div class="contents">
				<coming-soon />
				<form action="#" class="form" @submit.prevent="onSubmit">
					<div class="form__group">
						<base-input
						type="email"
						id="email"
						placeholder="Email Address"
						v-model="email"
						class="email"
						:error="emailError"
						/>
						<img src="./assets/icon-error.svg" alt="" class="errorImage" v-if="emailError">
						<p class="errorMessage">{{ emailError }}</p>
						<button class="btn">
							<img src="./assets/icon-arrow.svg" alt="" />
						</button>
					</div>
				</form>
			</div>
			<footer>
				<p class="attribution">
					Challenge by
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
						>Frontend Mentor</a
					>. Coded by
					<a
						href="https://www.linkedin.com/in/alfredthompsonovie/"
						target="_blank"
						>Alfred Thompson Ovie</a
					>.
				</p>
			</footer>
		
		</section>
	</div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style scoped>

</style>