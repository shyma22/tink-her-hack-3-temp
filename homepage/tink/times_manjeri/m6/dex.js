const stops = [
    { time: '18:30', name: 'Moffusil Bus Stand', status:'on-time' },
    { time: '18:43', name: 'Meenchanda', status: 'on-time' },
    { time: '18:55', name: 'Ramanattukara Bus Stand', status: 'on-time' },
    { time: '18:56', name: 'Kondotty Bus Stand', status: 'on-time' },
    { time: '19:20', name: 'Morayur', status: 'on-time' },
    { time: '19:56', name: 'Manjeri Bus Stand', status: 'on-time' }
];

function createTimeline() {
    const timeline = document.getElementById('busTimeline');
    
    stops.forEach((stop, index) => {
        const stopElement = document.createElement('div');
        stopElement.className = 'stop';
        
        stopElement.innerHTML = `
            <div class="stop-time">${stop.time}</div>
            <div class="stop-name">${stop.name}</div>
            <span class="status ${stop.status}">${stop.status}</span>
        `;

        timeline.appendChild(stopElement);

        // Animate stops with delay
        setTimeout(() => {
            stopElement.classList.add('active');
        }, 100 * index);
    });
}

// Initialize timeline when page loads
window.addEventListener('load', createTimeline);