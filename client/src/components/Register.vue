<template>
	<v-layout column>
		<v-flex xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="cyan" dark>
					<v-toolbar-title>Register</v-toolbar-title>
				</v-toolbar>
				<div class="pl-4 pr-4 pb-2 pt-2">
					<div>
						<input v-model="email" type="email" name="email" id="email" placeholder="email">
					</div>
					<div>

						<input v-model="password" type="password" name="password" id="password" placeholder="password">
					</div>
					<div class="error" v-html="error"></div>
					<div>
						<v-btn class="cyan" @click="register">Register</v-btn>
					</div>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
    import AuthenticationService from '../../services/AuthenticationService';

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
		            error: ''
            }
        },
        methods: {
            async register() {
                try {
                    await AuthenticationService.register({
                        email: this.email,
                        password: this.password
                    });
                } catch (e) {
		                this.error = e.response.data.error;
                }
            }
        }
    }
</script>

<style scoped>
.error {
	color: red;
}
</style>
