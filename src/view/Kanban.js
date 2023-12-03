import Column from '@/view/Column';

export default class Kanban {
  constructor(root) {
    this.root = root;

    Kanban.columns().forEach((column) => {
      const columnView = new Column(column.id, column.title);

      this.root.appendChild(columnView.elements.root);
    });
  }

  static columns() {
    return [
      {
        id: 1,
        title: 'Profile',
      },
      {
        id: 2,
        title: 'Profile',
      },
      {
        id: 3,
        title: 'Profile',
      },
    ];
  }
}
