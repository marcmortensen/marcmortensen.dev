<template>
  <div class="lg:min-h-screen pt-13">
    <div class="container text-center">
      <h1 class="text-45 sm:text-65">Legal Notice</h1>
      <div class="text-20 space-y-4 text-justify py-5 px-5 lg:px-16">
        <p>
          The information contained in this website is for general information
          purposes only. The information is provided by me and while I endeavour
          to keep the information up to date and correct, I make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability or availability
          with respect to the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </p>

        <p>
          In no event will I be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of this website.
        </p>

        <p>
          Through this website you are able to link to other websites which are
          not under the control of me. I have no control over the nature,
          content and availability of those sites. The inclusion of any links
          does not necessarily imply a recommendation or endorse the views
          expressed within them.
        </p>

        <p>
          Every effort is made to keep the website up and running smoothly.
          However, I takes no responsibility for, and will not be liable for,
          the website being temporarily unavailable due to technical issues
          beyond my control.
        </p>
      </div>
      <h2 class="text-30 sm:text-50">Cookie Policy</h2>
      <div class="text-20 space-y-4 text-justify py-5 px-5 lg:px-16">
        <p>
          The cookies used and stored in this webpage are visible in the next
          button, you are also free to change the setting saved anytime you
          want. I don't sell or transmit any of the data collected.
        </p>
      </div>
      <button
        class="bg-primary p-3 lg:text-20 rounded-lg mb-10"
        @click="$cookies.modal = true"
      >
        My cookie policy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  key: 'legal-notice',
  head() {
    return {
      title: 'Legal Notice | Marc Mortensen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See what cookies I use and why',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'See what cookies I use and why',
        },
      ],
    };
  },
};
</script>
