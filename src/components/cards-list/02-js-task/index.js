import ComponentsList from "../../../scripts/components-list.js";
import Card from "../../card/02-js-task/index.js";
export default class CardsList extends ComponentsList {
  _getComponentElement(dataItem) {
    return new Card(dataItem).element;
  }
}
