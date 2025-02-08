const stops = [
    { time: '16:35', name: 'Moffusil Bus Stand', status:'on-time' },
    { time: '16:40', name: 'Christian College', status: 'on-time' },
    { time: '16:49', name: 'Westhill', status: 'on-time' },
    { time: '16:56', name: 'Puthiyapa Beach', status: 'on-time' },
    { time: '17:09', name: 'Elathur', status: 'on-time' },
    { time: '17:39', name: 'Koyilandy Bus Stand', status: 'on-time' }
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