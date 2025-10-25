<template>
  <div class="container d-flex justify-content-center">
    <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
      <h3 class="mb-4 text-center">Sign In</h3>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="you@example.com"
          v-model="email"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Enter password"
          v-model="password"
        />
      </div>

      <button
        class="btn btn-primary w-100"
        :disabled="loading"
        @click="signin"
      >
        {{ loading ? "Signing in..." : "Sign in via Firebase" }}
      </button>

      <p v-if="errorMsg" class="text-danger mt-3 text-center">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Firebase Register Successful!")
        router.push("/")
        console.log(auth.currentUser) // To check the current User signed in
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>
