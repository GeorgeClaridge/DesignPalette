<script>
    import Palette from "./Palette.svelte";
    import Navbar from "./Navbar.svelte";
    import Landing from "./Landing.svelte";
    import About from "./About.svelte";
    import Users from "./Users.svelte";
    import { ActiveColours } from './Table.js';
</script>

<Palette></Palette>

<div style:background-color={$ActiveColours[0]} class="Container">
    <Navbar></Navbar>
    <Landing></Landing>
    <Users></Users>
    <About></About>
    <Users></Users>
</div>