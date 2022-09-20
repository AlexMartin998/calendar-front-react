import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleDeleteEvent = () => {
    startDeletingEvent();
  };

  return (
    <button
      onClick={handleDeleteEvent}
      className="btn btn-danger fab-danger"
      style={{
        display: hasEventSelected && !isDateModalOpen ? '' : 'none',
        zIndex: '100',
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
