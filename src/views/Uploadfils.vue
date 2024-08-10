<!-- <template>
    <div id="app" class="text-center">
        <h3>Upload files to firebasse</h3>

        <input type="file" ref="myfile">
        <button @click="upload">Upload</button>

    </div>
</template>

<script>
import { storage } from "../firebase"
import { ref, uploadBytes } from "firebase/storage"
export default {
    name: 'Uploadfils',
    components: {

    },

    methods: {
        upload: function () {
            const storageRef = ref(storage, 'myflie/44.jpeg');
            uploadBytes(storageRef, this.$refs.myfile.files[0]).then(
                (snapshot) => {
                    console.log("uploaded")
                }
            )
        }
    }
}
</script>

<style scoped></style>
 -->

 <template>
    <div id="app" class="text-center">
      <h3>Upload files to Firebase</h3>
      <input type="file" ref="myfile">
      <button @click="upload">Upload</button>
    </div>
  </template>
  
  <script>
  import { storage } from "../firebase"
  import { ref, uploadBytes } from "firebase/storage"
  
  export default {
    name: 'UploadFiles',
    methods: {
      upload: function () {
        const file = this.$refs.myfile.files[0];
        if (!file) {
          console.error("No file selected.");
          return;
        }
        
        const fileExtension = file.name.split('.').pop().toLowerCase(); // Extract file extension and convert to lowercase
        if (fileExtension !== 'jpeg') {
          console.error("Only JPEG files are allowed.");
          return;
        }
        
        const fileName = `myFile_${Date.now()}.${fileExtension}`; // Construct file name with timestamp
  
        const storageRef = ref(storage, fileName);
        uploadBytes(storageRef, file).then(snapshot => {
          console.log("File uploaded successfully.");
        }).catch(error => {
          console.error("Error uploading file:", error);
        });
      }
    }
  }
  </script>
  
  <style scoped></style>
  