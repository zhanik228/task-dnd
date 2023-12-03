export default class Column {
  constructor(id, title) {
    this.elements = {};
    this.elements.root = Column.createRoot();
    this.elements.title = this.elements.root.querySelector('.kanban__column-title');
    this.elements.items = this.elements.root.querySelector('.kanban__column-items');

    this.elements.root.dataset.id = id;
    this.elements.title.textContent = title;
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
    <div class="col kanban__column">
        <h2 class="text-light kanban__column-title"></h2>
        <div class="kanban__column-items">
          <div class="kanban-dropzone"></div>
        </div>
    </div>
    `).children[0];
  }
}
