# CClickableCard

## Data flow

### Card specific 

```
cardTitle: string,
cardDescription: string,
cardDetailDescription?: string,
cardImgAddress? string,
```

If you dont send any image address in props, the card will still be rendered, but without an image on top.

### Button specific

```
cardBtnText: string,
cardBtnFunction: Function
```

To send a new function that will be emitted via **cardBtnFunction** prop you will need to use *.bind()* function on component parameter, just like this:

```
<c-clickable-card
    cardTitle: "This is a card title",
    cardDescription: "A card description",
    cardDetailDescription?: "Optional description",
    cardBtnText: "Button Text",
    cardBtnFunction: anyNameFunction.bind(this, ...args)
>
</c-clickable-card>

<script setup lang='ts'>
    function anyNameFunction(args) {
        // common function declaration
    }
</script>
```
