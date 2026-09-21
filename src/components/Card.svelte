<script lang="ts">
	import type { Snippet } from "svelte";

    interface Iprops{
        header?:Snippet,
        body?:Snippet,
        footer?:Snippet,
        children?: Snippet;
    }
    let {header,body,footer} :Iprops= $props();
</script>

<div class="rounded-md border border-gray-200 p-4 shadow-sm shadow-slate-500 w-[250px]">
    <div class="card-header font-bold text-lg">
        {#if typeof header === "function"}
            {@render header()}
        {/if}
    </div>
    <div class="card-body my-2">
     {#if typeof body === "function"}
        {@render body()}
     {/if}
    </div>
    <div class="card-footer text-sm text-gray-500">
     {#if typeof footer === "function"}
        {@render footer()}
     {/if}
    </div>
</div>