const stops = [
    { time: '09:00', name: 'Palayam Bus Stand', status:'on-time' },
    { time: '09:03', name: 'Moffusil Bus stand', status: 'on-time' },
    { time: '09:25', name: 'Medical College', status: 'on-time' },
    { time: '09:56', name: 'Mavoor Bus Stand', status: 'on-time' },
    { time: '10:15', name: 'Cheruvadi', status: 'on-time' },
    { time: '10:27', name: 'Areekode Bus Stand', status: 'on-time' }
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