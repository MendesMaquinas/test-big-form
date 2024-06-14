function updateSuccess(toast, id) {
    toast.update(id, {
        render: "Sucesso",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });      
}

function updateError(toast, id, message) {
    toast.update(id, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
}

function success(toast, message) {
    toast.success(message, {
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
}

function error(toast, message) {
    toast.error(message, {
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
}

export default {
    updateSuccess,
    updateError,
    success,
    error,
}