document.addEventListener('DOMContentLoaded', () => {
            const projectData = {
                resources: [
                    { edt: "1.1", summary: "Conformación del equipo de trabajo", cost: 500, owner: "MILCA TOLEDO", category: "Gastos operativos y de soporte", payDate: "2025-05-31" },
                    { edt: "1.2", summary: "Aprobación y firma del Acta de Constitución", cost: 500, owner: "MILCA TOLEDO", category: "Gastos operativos y de soporte", payDate: "2025-06-15" },
                    { edt: "1.3", summary: "Reunión de lanzamiento del proyecto", cost: 300, owner: "MILCA TOLEDO", category: "Gastos operativos y de soporte", payDate: "2025-06-29" },
                    { edt: "2.1", summary: "Análisis de servicios municipales actuales", cost: 1000, owner: "JOSE GOMEZ", category: "Sin clasificar", payDate: "2025-07-03" },
                    { edt: "2.2", summary: "Identificación de trámites a digitalizar", cost: 500, owner: "ARIANNA ZUÑIGA", category: "Consultorías externas", payDate: "2025-07-11" },
                    { edt: "2.3", summary: "Definición de requerimientos técnicos", cost: 800, owner: "ARIANNA ZUÑIGA", category: "Sin clasificar", payDate: "2025-07-11" },
                    { edt: "2.4", summary: "Planificación de infraestructura tecnológica", cost: 2000, owner: "JOSE GOMEZ", category: "Infraestructura", payDate: "2025-07-24" },
                    { edt: "3.1", summary: "Arquitectura de la plataforma web", cost: 2500, owner: "JOSE GOMEZ", category: "Desarrollo tecnológico", payDate: "2025-08-08" },
                    { edt: "3.2", summary: "Diseño del módulo de reporte ciudadano", cost: 1500, owner: "MILCA TOLEDO", category: "Sin clasificar", payDate: "2025-08-24" },
                    { edt: "3.3", summary: "Diseño de la integración con emergencias", cost: 1000, owner: "JOSE GOMEZ", category: "Sin clasificar", payDate: "2025-08-24" },
                    { edt: "4.1", summary: "Programación del módulo de reporte", cost: 15000, owner: "ARIANNA ZUÑIGA", category: "Desarrollo tecnológico", payDate: "2025-09-07" },
                    { edt: "4.2", summary: "Desarrollo de interoperabilidad", cost: 2000, owner: "ARIANNA ZUÑIGA", category: "Desarrollo tecnológico", payDate: "2025-11-09" },
                    { edt: "4.3", summary: "Implementación de seguridad informática", cost: 2000, owner: "JOSE GOMEZ", category: "Desarrollo tecnológico", payDate: "2025-11-29" },
                    { edt: "5.1", summary: "Pruebas funcionales internas", cost: 1500, owner: "JOSE GOMEZ", category: "Desarrollo tecnológico", payDate: "2025-12-22" },
                    { edt: "5.2", summary: "Ajustes y correcciones", cost: 1000, owner: "JOSE GOMEZ", category: "Desarrollo tecnológico", payDate: "2026-01-06" },
                    { edt: "5.3", summary: "Pruebas piloto con usuarios", cost: 1000, owner: "ARIANNA ZUÑIGA", category: "Desarrollo tecnológico", payDate: "2026-01-30" },
                    { edt: "6.1", summary: "Capacitación del personal municipal", cost: 2000, owner: "JOSE GOMEZ", category: "Capacitación técnica", payDate: "2026-02-18" },
                    { edt: "6.2", summary: "Campañas de comunicación", cost: 3000, owner: "ARIANNA ZUÑIGA", category: "Comunicación y campañas ciudadanas", payDate: "2026-02-18" },
                    { edt: "7.1", summary: "Lanzamiento de la plataforma web", cost: 2200, owner: "MILCA TOLEDO", category: "Infraestructura", payDate: "2026-03-18" },
                    { edt: "7.2", summary: "Integración operativa con emergencias", cost: 2000, owner: "JOSE GOMEZ", category: "Sin clasificar", payDate: "2026-03-18" },
                    { edt: "7.3", summary: "Puesta en marcha del módulo de reporte", cost: 2000, owner: "JOSE GOMEZ", category: "Infraestructura", payDate: "2026-03-21" },
                    { edt: "8.1", summary: "Encuestas de satisfacción ciudadana", cost: 1500, owner: "ARIANNA ZUÑIGA", category: "Consultorías externas", payDate: "2026-04-17" },
                    { edt: "8.2", summary: "Evaluación del cumplimiento de objetivos", cost: 1500, owner: "JOSE GOMEZ", category: "Consultorías externas", payDate: "2026-04-27" },
                    { edt: "8.3", summary: "Documentación de cierre del proyecto", cost: 700, owner: "ARIANNA ZUÑIGA", category: "Gastos operativos y de soporte", payDate: "2026-05-09" }
                ],
                schedule: [
                    { edt: "1.1", product: "Conformación del equipo de trabajo", start: "2025-05-17", end: "2025-05-31", owner: "MILCA TOLEDO" },
                    { edt: "1.2", product: "Acta de constitución", start: "2025-06-01", end: "2025-06-15", owner: "MILCA TOLEDO" },
                    { edt: "1.3", product: "Lanzamiento del proyecto", start: "2025-06-15", end: "2025-06-29", owner: "MILCA TOLEDO" },
                    { edt: "2.1", product: "Análisis de servicios municipales actuales", start: "2025-06-19", end: "2025-07-03", owner: "JOSE GOMEZ" },
                    { edt: "2.2", product: "Identificación de trámites a digitalizar", start: "2025-06-27", end: "2025-07-11", owner: "ARIANNA ZUÑIGA" },
                    { edt: "2.3", product: "Definición de requerimientos técnicos", start: "2025-06-27", end: "2025-07-11", owner: "ARIANNA ZUÑIGA" },
                    { edt: "2.4", product: "Planificación de infraestructura tecnológica", start: "2025-07-10", end: "2025-07-24", owner: "JOSE GOMEZ" },
                    { edt: "3.1", product: "Arquitectura de la plataforma web", start: "2025-07-25", end: "2025-08-08", owner: "JOSE GOMEZ" },
                    { edt: "3.2", product: "Diseño del módulo de reporte ciudadano", start: "2025-08-10", end: "2025-08-24", owner: "MILCA TOLEDO" },
                    { edt: "3.3", product: "Diseño de la integración con emergencias", start: "2025-08-10", end: "2025-08-24", owner: "JOSE GOMEZ" },
                    { edt: "4.1", product: "Programación del módulo de reporte", start: "2025-08-24", end: "2025-09-07", owner: "ARIANNA ZUÑIGA" },
                    { edt: "4.2", product: "Desarrollo de interoperabilidad", start: "2025-10-26", end: "2025-11-09", owner: "ARIANNA ZUÑIGA" },
                    { edt: "4.3", product: "Implementación de seguridad informática", start: "2025-11-15", end: "2025-11-29", owner: "JOSE GOMEZ" },
                    { edt: "5.1", product: "Pruebas funcionales internas", start: "2025-12-08", end: "2025-12-22", owner: "JOSE GOMEZ" },
                    { edt: "5.2", summary: "Ajustes y correcciones", start: "2025-12-23", end: "2026-01-06", owner: "JOSE GOMEZ" },
                    { edt: "5.3", product: "Pruebas piloto con usuarios", start: "2026-01-16", end: "2026-01-30", owner: "ARIANNA ZUÑIGA" },
                    { edt: "6.1", product: "Capacitación del personal municipal", start: "2026-02-04", end: "2026-02-18", owner: "JOSE GOMEZ" },
                    { edt: "6.2", product: "Campañas de comunicación", start: "2026-02-04", end: "2026-02-18", owner: "ARIANNA ZUÑIGA" },
                    { edt: "7.1", product: "Lanzamiento de la plataforma web", start: "2026-03-04", end: "2026-03-18", owner: "MILCA TOLEDO" },
                    { edt: "7.2", product: "Integración operativa con emergencias", start: "2026-03-04", end: "2026-03-18", owner: "JOSE GOMEZ" },
                    { edt: "7.3", product: "Puesta en marcha del módulo de reporte", start: "2026-03-07", end: "2026-03-21", owner: "JOSE GOMEZ" },
                    { edt: "8.1", product: "Encuestas de satisfacción ciudadana", start: "2026-04-03", end: "2026-04-17", owner: "ARIANNA ZUÑIGA" },
                    { edt: "8.2", product: "Evaluación del cumplimiento de objetivos", start: "2026-04-13", end: "2026-04-27", owner: "JOSE GOMEZ" },
                    { edt: "8.3", product: "Documentación de cierre del proyecto", start: "2026-04-25", end: "2026-05-09", owner: "ARIANNA ZUÑIGA" }
                ],
                team: [
                    { name: "Milca Roxana Toledo Moncerrate", role: "Directora del Proyecto" },
                    { name: "Arianna Michelle Zúñiga Freire", role: "Coordinadora Técnica" },
                    { name: "José Alejandro Gómez", role: "Analista de Procesos" }
                ]
            };
            
            const owners = [...new Set(projectData.resources.map(r => r.owner))];
            const simulationDate = new Date();

            const tabs = {
                resumen: document.getElementById('section-resumen'),
                finanzas: document.getElementById('section-finanzas'),
                cronograma: document.getElementById('section-cronograma'),
                equipo: document.getElementById('section-equipo')
            };

            const navButtons = {
                resumen: document.getElementById('btn-resumen'),
                finanzas: document.getElementById('btn-finanzas'),
                cronograma: document.getElementById('btn-cronograma'),
                equipo: document.getElementById('btn-equipo')
            };
            
            let activeTab = 'resumen';
            let charts = {};

            function switchTab(tabName) {
                if (activeTab === tabName && charts[Object.keys(charts)[0]]) return;
                
                Object.values(tabs).forEach(tab => tab.classList.add('hidden'));
                tabs[tabName].classList.remove('hidden');

                Object.values(navButtons).forEach(btn => {
                    btn.classList.remove('tab-active');
                    btn.classList.add('tab-inactive');
                });
                navButtons[tabName].classList.add('tab-active');
                navButtons[tabName].classList.remove('tab-inactive');

                activeTab = tabName;
                
                Object.values(charts).forEach(chart => chart.destroy());
                charts = {};

                if (activeTab === 'resumen') {
                    renderSummaryCharts();
                } else if (activeTab === 'finanzas') {
                    renderFinanceCharts();
                    renderFinanceTable();
                }
            }

            function init() {
                renderKPIs();
                populateFilters();
                renderSchedule();
                renderTeam();

                Object.keys(navButtons).forEach(key => {
                    navButtons[key].addEventListener('click', () => switchTab(key));
                });

                document.getElementById('finance-search').addEventListener('input', (e) => renderFinanceTable(e.target.value));
                document.getElementById('schedule-owner-filter').addEventListener('change', renderSchedule);
                document.getElementById('schedule-status-filter').addEventListener('change', renderSchedule);

                switchTab('resumen');
            }
            
            function renderKPIs() {
                const totalBudget = projectData.resources.reduce((sum, item) => sum + item.cost, 0);
                document.getElementById('kpi-budget').textContent = `$${totalBudget.toLocaleString('es-ES')}`;
                document.getElementById('kpi-team').textContent = projectData.team.length;
                document.getElementById('kpi-tasks').textContent = projectData.schedule.length;
                
                const totalProgress = projectData.schedule.reduce((sum, task) => sum + calculateProgress(task.start, task.end, simulationDate).progress, 0);
                const avgProgress = totalProgress / projectData.schedule.length;
                document.getElementById('kpi-progress').textContent = `${avgProgress.toFixed(0)}%`;
            }

            function renderSummaryCharts() {
                const phaseData = projectData.schedule.reduce((acc, task) => {
                    const phaseNum = task.edt.split('.')[0];
                    if (!acc[phaseNum]) {
                        acc[phaseNum] = {
                            name: `Fase ${phaseNum}`,
                            tasks: [],
                            minDate: new Date(task.start),
                            maxDate: new Date(task.end),
                            cost: 0
                        };
                    }
                    acc[phaseNum].tasks.push(task);
                    const startDate = new Date(task.start);
                    const endDate = new Date(task.end);
                    if (startDate < acc[phaseNum].minDate) acc[phaseNum].minDate = startDate;
                    if (endDate > acc[phaseNum].maxDate) acc[phaseNum].maxDate = endDate;
                    return acc;
                }, {});

                projectData.resources.forEach(res => {
                    const phaseNum = res.edt.split('.')[0];
                    if (phaseData[phaseNum]) {
                        phaseData[phaseNum].cost += res.cost;
                    }
                });

                const sortedPhases = Object.values(phaseData).sort((a,b) => a.minDate - b.minDate);

                const timelineCtx = document.getElementById('timelineChart').getContext('2d');
                charts.timeline = new Chart(timelineCtx, {
                    type: 'bar',
                    data: {
                        labels: sortedPhases.map(p => p.name),
                        datasets: [{
                            label: 'Duración de la Fase',
                            data: sortedPhases.map(p => [p.minDate.getTime(), p.maxDate.getTime()]),
                            backgroundColor: 'rgba(144, 108, 209, 0.6)',
                            borderColor: 'rgba(144, 108, 209, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            borderSkipped: false,
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                type: 'time',
                                time: { unit: 'month', displayFormats: { month: 'MMM yy' } },
                                min: sortedPhases[0].minDate,
                                title: { display: true, text: 'Fecha' }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const start = new Date(context.raw[0]).toLocaleDateString('es-ES');
                                        const end = new Date(context.raw[1]).toLocaleDateString('es-ES');
                                        return `${context.dataset.label}: ${start} - ${end}`;
                                    }
                                }
                            }
                        }
                    }
                });
                
                const budgetPhaseCtx = document.getElementById('budgetPhaseChart').getContext('2d');
                charts.budgetPhase = new Chart(budgetPhaseCtx, {
                    type: 'doughnut',
                    data: {
                        labels: sortedPhases.map(p => p.name),
                        datasets: [{
                            label: 'Presupuesto por Fase',
                            data: sortedPhases.map(p => p.cost),
                            backgroundColor: [
                                '#d6bbf8', '#fbd5ff', '#c7d2fe', '#fde68a',
                                '#bbf7d0', '#fbcfe8', '#a5f3fc', '#fcd34d'
                            ],
                            borderColor: '#ffffff',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'top' },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.label || '';
                                        if (label) { label += ': '; }
                                        if (context.parsed !== null) {
                                            label += new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(context.parsed);
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }

            function renderFinanceCharts() {
                const costByCategory = projectData.resources.reduce((acc, item) => {
                    acc[item.category] = (acc[item.category] || 0) + item.cost;
                    return acc;
                }, {});

                const costByOwner = projectData.resources.reduce((acc, item) => {
                    acc[item.owner] = (acc[item.owner] || 0) + item.cost;
                    return acc;
                }, {});

                const pastelColors = [
                    '#fbcfe8', '#d8b4fe', '#fde68a', '#a5f3fc',
                    '#bbf7d0', '#fcd34d', '#c4b5fd', '#fdba74',
                    '#f9a8d4', '#99f6e4'
                ];

                const categoryCtx = document.getElementById('costByCategoryChart').getContext('2d');
                charts.costByCategory = new Chart(categoryCtx, {
                    type: 'bar',
                    data: {
                        labels: Object.keys(costByCategory),
                        datasets: [{
                            label: 'Costo',
                            data: Object.values(costByCategory),
                            backgroundColor: pastelColors.slice(0, Object.keys(costByCategory).length),
                            borderColor: '#ffffff',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y'
                    }
                });

                const ownerCtx = document.getElementById('costByOwnerChart').getContext('2d');
                charts.costByOwner = new Chart(ownerCtx, {
                    type: 'bar',
                    data: {
                        labels: Object.keys(costByOwner),
                        datasets: [{
                            label: 'Costo',
                            data: Object.values(costByOwner),
                            backgroundColor: pastelColors.slice(0, Object.keys(costByOwner).length),
                            borderColor: '#ffffff',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }

            function renderFinanceTable(searchTerm = '') {
                const tableBody = document.getElementById('finance-table-body');
                tableBody.innerHTML = '';
                const lowerCaseSearchTerm = searchTerm.toLowerCase();

                const filteredData = projectData.resources.filter(item => {
                    return item.summary.toLowerCase().includes(lowerCaseSearchTerm) ||
                        item.owner.toLowerCase().includes(lowerCaseSearchTerm) ||
                        item.category.toLowerCase().includes(lowerCaseSearchTerm);
                });

                filteredData.forEach(item => {
                    const row = document.createElement('tr');
                    row.className = 'border-b border-stone-200 hover:bg-stone-50';
                    row.innerHTML = `
                        <td class="p-3">${item.edt}</td>
                        <td class="p-3">${item.summary}</td>
                        <td class="p-3">$${item.cost.toLocaleString('es-ES')}</td>
                        <td class="p-3">${item.owner}</td>
                        <td class="p-3">${item.category}</td>
                        <td class="p-3">${new Date(item.payDate + 'T00:00:00').toLocaleDateString('es-ES')}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
            
            function populateFilters() {
                const ownerFilter = document.getElementById('schedule-owner-filter');
                ownerFilter.innerHTML = '<option value="all">Todos los Responsables</option>';
                owners.forEach(owner => {
                    const option = document.createElement('option');
                    option.value = owner;
                    option.textContent = owner;
                    ownerFilter.appendChild(option);
                });
            }
            
            function calculateProgress(start, end, now) {
                const startDate = new Date(start);
                const endDate = new Date(end);
                
                if (now < startDate) return { progress: 0, status: 'Pendiente' };
                if (now > endDate) return { progress: 100, status: 'Completado' };
                
                const totalDuration = endDate - startDate;
                if (totalDuration === 0) return { progress: 100, status: 'Completado' };
                
                const elapsed = now - startDate;
                const progress = Math.round((elapsed / totalDuration) * 100);
                
                return { progress: progress, status: 'En Progreso' };
            }

            function renderSchedule() {
                const listContainer = document.getElementById('schedule-list');
                const ownerFilter = document.getElementById('schedule-owner-filter').value;
                const statusFilter = document.getElementById('schedule-status-filter').value;
                listContainer.innerHTML = '';

                let tasksWithStatus = projectData.schedule.map(task => ({
                    ...task,
                    ...calculateProgress(task.start, task.end, simulationDate)
                }));
                
                let filteredSchedule = tasksWithStatus;

                if (ownerFilter !== 'all') {
                    filteredSchedule = filteredSchedule.filter(task => task.owner === ownerFilter);
                }
                
                if (statusFilter !== 'all') {
                    filteredSchedule = filteredSchedule.filter(task => task.status === statusFilter);
                }
                
                if (filteredSchedule.length === 0) {
                    listContainer.innerHTML = `<p class="text-center text-stone-500 py-8">No hay tareas que coincidan con los filtros seleccionados.</p>`;
                    return;
                }

                const groupedByPhase = filteredSchedule.reduce((acc, task) => {
                    const phase = `Fase ${task.edt.split('.')[0]}`;
                    if (!acc[phase]) {
                        acc[phase] = [];
                    }
                    acc[phase].push(task);
                    return acc;
                }, {});

                for (const phase in groupedByPhase) {
                    const phaseContainer = document.createElement('div');
                    phaseContainer.className = 'mb-6';
                    
                    const phaseTitle = document.createElement('h4');
                    phaseTitle.className = 'text-lg font-semibold text-[#906cd1] border-b-2 border-[#d5c6f3] pb-2 mb-4';
                    phaseTitle.textContent = phase;
                    phaseContainer.appendChild(phaseTitle);
                    
                    groupedByPhase[phase].forEach(task => {
                        const taskElement = document.createElement('div');
                        taskElement.className = 'p-4 rounded-lg border border-stone-200 mb-3';
                        
                        const statusColors = {
                            'Pendiente': 'bg-amber-500',
                            'En Progreso': 'bg-sky-500',
                            'Completado': 'bg-emerald-500'
                        };
                        const statusColor = statusColors[task.status] || 'bg-gray-500';

                        taskElement.innerHTML = `
                            <div class="flex flex-wrap justify-between items-center mb-2">
                                <p class="font-semibold">${task.edt} - ${task.product}</p>
                                <span class="text-xs font-medium text-white px-2 py-1 rounded-full ${statusColor}">${task.status}</span>
                            </div>
                            <div class="flex flex-wrap justify-between items-center text-sm text-stone-500 mb-2">
                                <span>${task.owner}</span>
                                <span>${new Date(task.start + 'T00:00:00').toLocaleDateString('es-ES')} - ${new Date(task.end + 'T00:00:00').toLocaleDateString('es-ES')}</span>
                            </div>
                            <div class="progress-bar-bg w-full h-2.5">
                                <div class="progress-bar-fill h-2.5" style="width: ${task.progress}%"></div>
                            </div>
                        `;
                        phaseContainer.appendChild(taskElement);
                    });
                    listContainer.appendChild(phaseContainer);
                }
            }

            function renderTeam() {
                const teamContainer = document.getElementById('team-list');
                teamContainer.innerHTML = '';

                const imageMap = {
                    "Milca Roxana Toledo Moncerrate": "./assets/image/milca.jpg",
                    "Arianna Michelle Zúñiga Freire": "./assets/image/Arianna.jpg",
                    "José Alejandro Gómez": "./assets/image/alejandro.jpg"
                };

                projectData.team.forEach(member => {
                    const card = document.createElement('div');
                    card.className = 'bg-white p-6 rounded-lg shadow-md text-center';

                    const imagePath = imageMap[member.name] ? `${imageMap[member.name]}` : null;

                    card.innerHTML = `
                        <div class="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#d5c6f3] hover:border-[#906cd1] transition-colors duration-300 ease-in-out">
                            ${imagePath
                                ? `<img src="${imagePath}" alt="${member.name}" class="w-full h-full object-cover">`
                                : `<div class="bg-[#d5c6f3] w-full h-full flex items-center justify-center text-3xl text-[#906cd1] font-bold">
                                    ${member.name.split(' ').map(n => n[0]).join('')}
                                </div>`
                            }
                        </div>
                        <h4 class="text-lg font-bold text-stone-800">${member.name}</h4>
                        <p class="text-[#906cd1] font-medium">${member.role}</p>
                    `;
                    teamContainer.appendChild(card);
                });
            }

            init();

            const scrollTopBtn = document.getElementById('scrollTopBtn');
            if (scrollTopBtn) {
                scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        });

