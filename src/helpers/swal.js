import swal from 'sweetalert';

export const deleteConfirm = (callback) => {
  swal({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      callback();
    }
  });
};
