<script lang="ts">
  import svelteLogo from '../assets/svelte.svg'
  
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<div class="svelte-card">
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  <button onclick={increment}>
    count is {count}
  </button>
</div>

<style>
  .svelte-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #ff3e00;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
</style>
