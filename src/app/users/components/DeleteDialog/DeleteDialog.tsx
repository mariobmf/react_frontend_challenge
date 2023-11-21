interface DeleteDialogProps {
  onDelete: () => void;
  onCancel: () => void;
}

export function DeleteDialog({ onDelete, onCancel }: DeleteDialogProps) {
  return (
    <div
      className="flex h-full w-full flex-col justify-between gap-2"
      role="alertdialog"
    >
      <h3 className="text-center">Tem certeza que deseja excluir o usuário?</h3>
      <div className="flex justify-end gap-2">
        <button
          className="rounded bg-custom-red-500 p-2 text-sm font-semibold text-white hover:opacity-70"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="rounded bg-custom-cyan-500 p-2 text-sm font-semibold text-white hover:opacity-70"
          onClick={onDelete}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
