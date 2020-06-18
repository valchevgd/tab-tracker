<template>
	<div>
		<h1>Register</h1>
		<div>
			<input v-model="email" type="email" name="email" id="email" placeholder="email">
		</div>
		<div>

			<input v-model="password" type="password" name="password" id="password" placeholder="password">
		</div>
		<div>
			<button @click="register">Register</button>
		</div>
	</div>
</template>

<script>
    import AuthenticationService from "../../services/AuthenticationService";

    export default {
        name: "Register",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async register() {
								const response = await AuthenticationService.register({
										email: this.email,
										password: this.password
								});

                console.log(response.data);
            }
        }
    }
</script>

<style scoped>

</style>
