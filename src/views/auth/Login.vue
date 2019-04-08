<template>
  <div>
    <v-card>
      <v-card-title class="primary white--text py-4 title">Callcenter</v-card-title>
      <v-form v-model="valid" lazy-validation>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                prepend-icon="fas fa-envelope"
                label="E-mail"
                :disabled="verify"
                placeholder="test@example.com"
                v-model="email"
                v-if="!verify"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="fas fa-unlock"
                required
                label="Password"
                :disabled="verify"
                type="password"
                placeholder="******"
                v-model="password"
                v-if="!verify"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-if="verify"
                prepend-icon="fas fa-key"
                required
                label="Code"
                type="text"
                placeholder="****"
                counter="4"
                minlength="4"
                maxlength="4"
                v-model="code"
                :rules="[rules.required, rules.isNumber]"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="elevation-0"
          :disabled="!valid"
          v-if="!verify"
          @click="login()"
        >Login</v-btn>
        <v-btn
          color="success"
          class="elevation-0"
          :disabled="!valid"
          v-if="verify"
          @
          @click="doVerify()"
        >Verify Code</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      verify: false,
      email: "s.vanhooff@hotmail.com",
      password: "123",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        isNumber: v => !isNaN(v) || "Must be a number"
      },
      code: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    login() {
      if (this.valid) {
        this.$store
          .dispatch("login", {
            employee: {
              email: this.email,
              password: this.password
            }
          })
          .then(needVerification => {
            this.verify = needVerification;
            this.$store.dispatch("successMessage", "Welcome back");
          })
          .catch(err => {
            console.log("Login error", err);
            this.$store.dispatch("errorMessage", "Unauthenticated");
          });
      }
    },
    doVerify() {
      if (this.valid) {
        this.$store
          .dispatch("verify", {
            employee: {
              email: this.email,
              password: this.password
            },
            code: this.code
          })
          .catch(err => {
            console.log("Login error", err);
            this.$store.dispatch("errorMessage", "Unauthenticated");
          });
      }
    }
  }
};
</script>

<style>
</style>