import KanbanApi from '@/api/KanbanApi';

export default class DropZone {
  static createDropZone() {
    const range = document.createRange();

    range.selectNode(document.body);

    const dropZone = range.createContextualFragment(`
      <div class="kanban-dropzone"></div>
    `).children[0];

    dropZone.addEventListener('dragover', (event) => {
      event.preventDefault();
      dropZone.classList.add('kanban-dropzone--active');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('kanban-dropzone--active');
    });

    dropZone.addEventListener('drop', async (event) => {
      event.preventDefault();
      dropZone.classList.remove('kanban-dropzone--active');

      const columnElement = dropZone.closest('.kanban-column');
      const columnId = Number(columnElement.dataset.id);
      const dropZonesInColumn = Array.from(
        columnElement.querySelectorAll('.kanban-dropzone'),
      );
      const droppedIndex = dropZonesInColumn.indexOf(dropZone);
      const itemId = event.dataTransfer.getData('text/plain');
      const droppedItemElement = document.querySelector(`[data-id="${itemId}"]`);
      // const insertAfter = dropZone.
      // parentElement.classList.contains('card') ? dropZone.parentElement : dropZone;
      //
      // insertAfter.after(droppedItemElement);
      // eslint-disable-next-line
      console.log(columnElement, columnId, droppedIndex, droppedItemElement);
      await KanbanApi.updateItem(itemId, {
        columnId,
        position: droppedIndex,
      });
    });

    return dropZone;
  }
}
