const stops = [
    { time: '17:00', name: 'Palayam Bus Stand', status:'on-time' },
    { time: '17:03', name: 'Moffusil Bus stand', status: 'on-time' },
    { time: '17:25', name: 'Medical College', status: 'on-time' },
    { time: '17:37', name: 'Mavoor Bus Stand', status: 'on-time' },
    { time: '17:48', name: 'Cheruvadi', status: 'on-time' },
    { time: '18:07', name: 'Areekode Bus Stand', status: 'on-time' }
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