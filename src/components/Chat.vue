<template>
  <div>
    <v-menu v-model="chatOpened" :close-on-content-click="false" :nudge-width="250">
      <template #activator="{ on: menu }">
        <v-tooltip left>
          <template v-slot:activator="{ on:tooltip }">
            <v-btn v-on="{ ...tooltip, ...menu }" bottom right fixed fab color="success" icon>
              <v-icon>fas fa-comments</v-icon>
            </v-btn>
          </template>
          <span>Chat with us!</span>
        </v-tooltip>
      </template>

      <v-card>
        <v-toolbar flat dark :color="connectionStatus">
          <v-toolbar-title>Chat</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon flat @click="chatOpened = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="pa-2">
          <label v-if="connected">Connected</label>
          <v-textarea class="caption" readonly no-resize flat v-model="messages"></v-textarea>
          <v-toolbar color="white" flat>
            <v-text-field
              class="caption"
              clearable
              v-on:keyup.enter="sendMessage()"
              v-model="message"
              placeholder="Type a message..."
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon color="success" @click="sendMessage()">
              <v-icon>fas fa-paper-plane</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wsUri: "ws://localhost:8081/callcenter/chat",
      websocket: null,
      message: "",
      messages: "",
      chatOpened: false,
      connected: false
    };
  },
  computed: {
    user() {
      // user object uit vuex store
      return this.$store.getters.user;
    },
    connectionStatus() {
      // gives back a success or error string that defines the color of the chat toolbar, based on vuetify theme
      if (this.connected) return "success";

      return "error";
    }
  },
  watch: {
    chatOpened(val) {
      if (val) {
        if (!this.connected) {
          this.connect();
        }
      }
    }
  },
  methods: {
    join() {
      this.websocket.send("Joined");
    },
    sendMessage() {
      this.websocket.send(this.message);
      this.message = "";
    },
    connect() {
      var self = this;
      self.websocket = new WebSocket(self.wsUri);

      this.websocket.onopen = function(evt) {
        self.connected = true;
        self.join();
      };
      this.websocket.onmessage = function(evt) {
        self.messages += `${self.user.email}: ${evt.data}\n`;
      };
      this.websocket.onerror = function(evt) {
        self.connected = false;
      };
    }
  }
};
</script>

<style>
</style>
