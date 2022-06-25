# CCardsGrid

## Data flow

### 'cards' prop specification

Example on how data must me be sent:

```
[{
    cardKey: "_3467463afiolsjf",
    cardTitle: "This is a card name",
    cardDescription: "This is a card description",
    cardDetailDescription: "Optional description"
},{
    cardKey: "_1209j12ijioj",
    cardTitle: "This is another card name",
    cardDescription: "This is aanother card description",
    cardDetailDescription: "Optional another description"
},{
    cardKey: "_890790njmdfligh",
    cardTitle: "This is a new card name",
    cardDescription: "This is a new card description",
    cardDetailDescription: "Optional new description"
}]

```

### 'cardBtnFunction' prop specification

If you sent a *cardBtnFunction* inside a **card:Object** in **cards:Array** then the specific function for that button will be placed instead the *cardBtnFunction* that is outside the **cards:Array**.

Example:

```
<c-cards-grid
    :cards=cardsList
    :card-btn-function=function_1
>
</c-cards-grid>

<script>
const cardsList = [{
    ...
    cardBtnFunction: function_2
},{
    ...
},{
    ...
    cardBtnFunction: function_2
}]

function function_1() {}
function function_2() {}
</script>
```

Generates:
```
    <c-clickable-card
        ...
        :cardBtnFunction= function_2()
    >
    </c-clickable-grid>
    <c-clickable-card
        ...
        :cardBtnFunction= function_1()
    >
    </c-clickable-grid>
    <c-clickable-card
        ...
        :cardBtnFunction= function_2()
    >
    </c-clickable-grid>
```