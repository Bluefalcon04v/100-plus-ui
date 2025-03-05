export const CARD_CODE = [
  {
    type: "center-aligned",
    code: `
          <div class="flex flex-col justify-center items-center gap-2 bg-white px-3 py-6  rounded-lg w-full h-full max-w-60">
            <div class="bg-neutral-300 rounded-full aspect-square w-20 h-20"></div>
            <div class="font-semibold text-black text-2xl">Headline</div>
            <p class="text-gray-500 text-center text-pretty">
              Please add your content here. Keep it short and simple. And smile :)
            </p>
          </div>
          `,
  },
  {
    type: "left-aligned",
    code: `
    <div class="flex flex-col justify-center items-center gap-2 bg-white px-2 py-1 text-black rounded-lg w-full h-full max-w-60">
      Hello
    </div>
    `,
  },
];
