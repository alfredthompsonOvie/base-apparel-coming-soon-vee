<template>
	<div class="container">
		<section>
			<header>
				<img src="@/assets/logo.svg" alt="" />
			</header>
			<div class="hero"></div>
			<div class="contents">
				<coming-soon />

				<vee-form
					class="form"
					:validation-schema="subscribtionSchema"
					@submit="onSubmit"
				>
					<div class="form__group">
						<label for="email"></label>
						<input-field name="email" :bails="false" v-slot="{ field, errors }">
							<input
								type="email"
								name="email"
								id="email"
								v-bind="field"
								class="email"
								:class="errors.length ? 'error' : ''"
							/>
							<div class="errorMessage" v-for="error in errors" :key="error">
								{{ error }}
								<img src="@/assets/icon-error.svg" alt="" class="errorIcon" />
							</div>
						</input-field>

						<button class="btn">
							<img src="./assets/icon-arrow.svg" alt="" />
						</button>
					</div>
				</vee-form>
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
import ComingSoon from "@/components/ComingSoon.vue";

export default {
	name: "App",
	components: {
		ComingSoon,
	},
	data() {
		return {
			subscribtionSchema: {
				email: "required|email",
			},
		};
	},
	methods: {
		onSubmit(values) {
			console.log(values);
		},
	},
};
</script>

<style scoped></style>
