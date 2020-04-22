new Vue({
  el: "#app",
  data: {
    bienvenue: "Hello Vue !",
    message: "votre message...",
    link: "lien vers le site de grafikart",
    url_link: "http://grafikart.fr",
    success: true,
    persons: ["Pierre", "Paul", "Jacques"],
    success2: false,
    message2: "",
    firstname: "Jean",
    lastname: "Delatour",
    fullname2: "",
  },
  methods: {
    close: function () {
      this.success = !this.success;
    },
    style: function () {
      if (this.success) {
        return { background: "#00FF00" };
      } else {
        return { background: "#FF0000" };
      }
    },
  },
  computed: {
    cls: function () {
      console.log("cls called");
      return this.success2 === true ? "success" : "error";
    },
    fullname: {
      get() {
        return this.firstname + " " + this.lastname;
      },
      set(value) {
        console.log(value);
      },
    },
  },
  watch: {
    fullname2(value) {
      console.log(`watch ${value}`);
    },
  },
});
