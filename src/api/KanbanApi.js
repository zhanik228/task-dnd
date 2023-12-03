import store from '@/store';

async function read() {
  const json = localStorage.getItem('kanban-data');

  if (!json) {
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
    ];
  }

  return JSON.parse(json);
}
function save(data) {
  localStorage.setItem('kanban-data', JSON.stringify(data));
}

export default class KanbanApi {
  static async getItems(columnId) {
    const data = await read();
    const column = data.find((col) => col.id === columnId);

    if (!column) {
      return [];
    }

    return column.items;
  }

  static async insertItem(columnId) {
    const data = await read();
    await store.dispatch('GET_PROFILE');
    const card = store.getters.PROFILE;
    const column = data.find((col) => col.id === columnId);
    const item = {
      id: card.email,
      content: card,
    };

    if (!column) {
      throw new Error('Column does not exist');
    }

    column.items.push(item);
    save(data);

    const columnNode = document.querySelector(`[data-id="${column.id}"]`);
    console.log(columnNode);

    return card;
  }
  // eslint-disable-next-line
  static async updateItem(itemId, newProps) {
    const data = await read();
    let foundItem;
    data.forEach((column) => {
      // console.log(column.items.map((card) => card.id === itemId));
      const findItem = column.items.find((item) => item.id === itemId);
      if (findItem) {
        foundItem = [findItem, column];
      }
    });

    if (!foundItem) {
      throw new Error('Item not found.');
    }

    const [item, currentColumn] = foundItem;
    item.content = newProps.content === undefined ? item.content : newProps.content;

    console.log(item, currentColumn);
    if (
      newProps.columnId !== undefined
      && newProps.position !== undefined
    ) {
      const targetColumn = data.find((column) => column.id === newProps.columnId);
      if (!targetColumn) {
        throw new Error('Target column not found');
      }

      currentColumn.items.splice(currentColumn.items.indexOf(item), 1);
      targetColumn.items.splice(newProps.position, 0, item);
    }

    save(data);
  }

  static async getItem(itemId) {
    const data = await read();
    let foundItem;
    data.forEach((column) => {
      // console.log(column.items.map((card) => card.id === itemId));
      const findItem = column.items.find((item) => item.id === itemId);
      if (findItem) {
        foundItem = [findItem, column];
      }
    });

    if (!foundItem) {
      throw new Error('Item not found.');
    }

    const [item, column] = foundItem;
    return [item, column];
  }
}
