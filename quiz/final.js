class Final {
    constructor(count, totalAmount) {
        this.scoreElement = document.querySelector('.score');
        this.againButton = document.querySelector('#again');

        this.render(count, totalAmount);
        this.againButton.addEventListener('click', location.reload.bind(location));
    }

    render(count, totalAmount) {
        this.scoreElement.innerHTML = `Tu as ${count} questions sur ${totalAmount} de correcte`;
    }
}

export default Final;
