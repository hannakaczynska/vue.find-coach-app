<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        id="frontend"
        name="frontend"
        type="checkbox"
        checked
        @change="setFilters"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        id="backend"
        name="backend"
        type="checkbox"
        checked
        @change="setFilters"
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        id="career"
        name="career"
        type="checkbox"
        checked
        @change="setFilters"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  emits: ['change-filter'],
  methods: {
    setFilters(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>


<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>>
