console.log("Hello World");
URL ="https://api.currencyapi.com/v3/latest?apikey=cur_live_hWw44oefgzPVles5WTTFIbprP8ljfXzXpo8Fgu2u"

const btn = document.querySelector("btn");
btn.addEventListener("click", (e) => {
    e.preventDefault
    console.log("Button clicked");
});
const tablebody = document.getElementsByTagName("tbody");
tablebody.innerHTML = `
<tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 3</td>
</tr>
`