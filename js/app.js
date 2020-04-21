new Vue({
  el: "#app",
  data: {
    bienvenue: "Hello Vue !",
    message: "votre message...",
    link: "lien vers le site de grafikart",
    url_link: "http://grafikart.fr",
    success: true,
    persons: ["Pierre", "Paul", "Jacques"],
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
});
