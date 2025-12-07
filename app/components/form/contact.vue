<script setup>
import * as yup from "yup";

const data = useSiteSettingsStore();
const settings = data.settings;

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  message: yup.string().required().min(10, 'Message must be at least 10 characters'),
});

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema
})

const [name] = defineField('name')
const [email] = defineField('email')
const [message] = defineField('message')

const onSubmit = handleSubmit((values) => {
  send();
})

const mail = useMail();
const isSubmitting = ref(false);
const messageSent = ref(false);
const errorMessage = ref('');

const timeoutId = ref(null);

function send() {
  isSubmitting.value = true;
  errorMessage.value = ''; // Clear previous errors

  // Sanitize all inputs
  const sanitizedEmail = email.value.trim();
  const sanitizedName = name.value.replace(/[\r\n]/g, '').trim();
  const sanitizedMessage = message.value.trim().replace(/[\r\n\t]/g, ' ');

  mail
    .send({
      from: sanitizedEmail,
      subject: `New contact from ${settings.title} - ${sanitizedName}`,
      text: sanitizedMessage,
    })
    .then(() => {
      name.value = "";
      email.value = "";
      message.value = "";
      messageSent.value = true;
      isSubmitting.value = false;

      // Clear existing timeout
      if (timeoutId.value) clearTimeout(timeoutId.value);

      // Auto-hide success message after 5 seconds

      timeoutId.value = setTimeout(() => {
        messageSent.value = false;
      }, 5000);
    })
    .catch((error) => {
      console.error(error);
      errorMessage.value = 'Failed to send message. Please try again.';
      isSubmitting.value = false;
    });
}

onUnmounted(() => {
  if (timeoutId.value) clearTimeout(timeoutId.value);
});
</script>
<template>
  <div>
    <form v-if="!messageSent" @submit="onSubmit">
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="name" type="text" id="name" class="form-control" :class="{ 'is-invalid': errors.name }" />
        <div class="invalid-feedback">{{ errors.name }}</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" id="email" class="form-control" :class="{ 'is-invalid': errors.email }" />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea v-model="message" id="message" rows="3" class="form-control"
          :class="{ 'is-invalid': errors.message }"></textarea>
        <div class="invalid-feedback">{{ errors.message }}</div>
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send</span>
          <span v-else>Sending...</span>
          <span v-if="isSubmitting" class="spinner-border spinner-border-sm ms-2" role="status"
            aria-hidden="true"></span>
        </button>
      </div>
    </form>

    <div v-if="messageSent" class="alert alert-success text-center">
      Message sent! Check your inbox.
    </div>
  </div>
</template>

