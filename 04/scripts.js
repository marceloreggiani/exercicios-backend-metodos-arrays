const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function gerenciarAtendimento(filaPacientes, operacao, nomePaciente = '') {
    if (operacao === 'agendar') {
        filaPacientes.push(nomePaciente);
    } else if (operacao === 'atender') {
        const pacienteAtendido = filaPacientes.shift();
        console.log(`Paciente atendido: ${pacienteAtendido}`);
    } else {
        console.log('Operação inválida. Use "agendar" ou "atender".');
    }

    console.log(`Lista de pacientes atualizada: ${filaPacientes.join(', ')}`);
}

const pacientesFila = ['João', 'Maria', 'Carlos', 'Laura'];

gerenciarAtendimento(pacientesFila, 'agendar', 'Ana');
gerenciarAtendimento(pacientesFila, 'atender');
gerenciarAtendimento(pacientesFila, 'atender');
