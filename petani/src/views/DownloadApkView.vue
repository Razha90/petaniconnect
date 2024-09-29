<template>
  <div class="download-page">

    <h1>Petani Connect.</h1>
    <p>File akan mulai diunduh secara otomatis.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Ganti dengan URL file yang ingin diunduh
      downloadLink: 'https://firebasestorage.googleapis.com/v0/b/petani-connect-31d81.appspot.com/o/petani-connect%2Fapp-release.apk?alt=media&token=d1ed3c26-a4a9-4069-96f7-816068c7dd10'
    };
  },
  mounted() {
    this.downloadFile();
  },
  methods: {
    downloadFile() {
      const link = document.createElement('a');
      link.href = this.downloadLink;
      link.setAttribute('download', 'app-release.apk'); // Nama file saat diunduh
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style scoped>
.download-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>
