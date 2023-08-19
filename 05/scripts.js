const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(filaPacientes, paciente) {
    filaPacientes.push(paciente);
    console.log(`Paciente ${paciente} agendado. Lista atualizada: ${filaPacientes.join(', ')}`);
}

function atenderPaciente(filaPacientes) {
    if (filaPacientes.length === 0) {
        console.log('Não há pacientes na fila para atender.');
    } else {
        const pacienteAtendido = filaPacientes.shift();
        console.log(`Paciente ${pacienteAtendido} atendido. Lista atualizada: ${filaPacientes.join(', ')}`);
    }
}

function cancelarAtendimento(filaPacientes, paciente) {
    const index = filaPacientes.indexOf(paciente);
    if (index !== -1) {
        filaPacientes.splice(index, 1);
        console.log(`Atendimento do paciente ${paciente} cancelado. Lista atualizada: ${filaPacientes.join(', ')}`);
    } else {
        console.log(`Paciente ${paciente} não encontrado na fila.`);
    }
}

const pacientesFila = ['João', 'Maria', 'Carlos', 'Laura'];

agendarPaciente(pacientesFila, 'Ana');
agendarPaciente(pacientesFila, 'Pedro');
atenderPaciente(pacientesFila);
cancelarAtendimento(pacientesFila, 'Maria');
atenderPaciente(pacientesFila);
