<script>
    import { ActiveColours } from './Table.js';
</script>

<div class="Container" style:color={$ActiveColours[1]}>
    <div class="Header text-center font-bold text-6xl pb-8">Header Goes Here</div>

    <div class="Container grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 px-64 pb-24">
        <div class="Card dropbox border-2">
            <div style:background-color={$ActiveColours[2]}  class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center">
                <div class="Header text-2xl font-bold">Free</div>
                <div class="Close text-2xl font-bold">X</div>
            </div>

            <ul class="list-none m-4 font-bold">
                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                <li>And I'd like to take a minute just sit right there</li>
                <li>I'll tell you how I became the prince of a town called Bel-Air</li>
            </ul>

            <button style:background-color={$ActiveColours[3]} class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4">Start Now</button>
        </div>

        <div class="Card dropbox border-2">
            <div style:background-color={$ActiveColours[2]}  class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center">
                <div class="Header text-2xl font-bold">Free</div>
                <div class="Close text-2xl font-bold">X</div>
            </div>

            <ul class="list-none m-4 font-bold">
                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                <li>And I'd like to take a minute just sit right there</li>
                <li>I'll tell you how I became the prince of a town called Bel-Air</li>
            </ul>

            <button style:background-color={$ActiveColours[3]} class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4">Start Now</button>
        </div>

        <div class="Card dropbox border-2">
            <div style:background-color={$ActiveColours[2]}  class="flex justify-between border-b-[3px] border-black py-2 px-4 items-center">
                <div class="Header text-2xl font-bold">Free</div>
                <div class="Close text-2xl font-bold">X</div>
            </div>

            <ul class="list-none m-4 font-bold">
                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                <li>And I'd like to take a minute just sit right there</li>
                <li>I'll tell you how I became the prince of a town called Bel-Air</li>
            </ul>

            <button style:background-color={$ActiveColours[3]} class="py-2 px-4 dropbox text-lg font-bold hover:-translate-y-1 duration-200 hover:scale-105 mx-4 mb-4">Start Now</button>
        </div>
    </div>
</div>