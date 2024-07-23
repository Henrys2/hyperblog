// Obtener todos los botones de editar y eliminar
const editButtons = document.querySelectorAll('.edit-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');

// Asignar eventos a los botones
editButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para editar el producto
        console.log('Editar producto:', button.closest('.product').querySelector('h3').innerText);
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para eliminar el producto
        console.log('Eliminar producto:', button.closest('.product').querySelector('h3').innerText);
        button.closest('.product').remove(); // Ejemplo de eliminación visual del DOM
    });
});
