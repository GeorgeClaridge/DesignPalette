<script>
    import { ActiveColours } from './Table.js';
    import Thumb from './Thumb.svelte';
</script>

<div class="py-20 px-64 flex justify-between items-center">
    <div class="Info w-[50%]">
        <div style:color={$ActiveColours[2]} class="Header font-bold text-6xl tracking-tight">About Us</div>
        <div class="SubText text-xl py-3">"Welcome to TechNest, where innovation takes flight. We specialize in crafting cutting-edge solutions that redefine industry standards. Join us on our journey to transform the future of technology."</div>
        <div class="SubText text-xl">At TechNest, we empower our employees with the freedom to explore, innovate, and excel. With an environment that fosters creativity and autonomy, our team members have the liberty to pursue their passions and drive meaningful change. Embrace your free will at TechNest and unleash your full potential.</div>
        <div class="ButtonContainer">
            <button style:background-color={$ActiveColours[3]} class="py-2 px-8 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mt-4">Learn More</button>
        </div>
    </div>

    <div class="Info">
        <Thumb></Thumb>
    </div>
</div>
