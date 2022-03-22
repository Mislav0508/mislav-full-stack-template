<template>
  <div>

    <select class="px-2 text-center" 
    v-model="selectedValue" @change="onChange(selectedValue)">

        <option
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
        >{{ $t(`picker.${locale.code}`) }}</option>

    </select>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
      // flags: [
      //   "/images/flags/picker-uk.png",
      //   "/images/flags/picker-hr.png",
      //   "/images/flags/picker-de.png",
      // ]
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 1.0);
  font-size: 0.9rem;
  background: #4d5061;
  color: var(--primary);
  border: 1px solid var(--primary);
  cursor: pointer; 
  padding: 0.2rem; 
}

</style>