/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
const minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
	let hours = 0

	for(let i = 0; i < energy.length; i++) {
		if (initialEnergy > energy[i]) {
			initialEnergy -= energy[i]
		} else {
			hours += energy[i] - initialEnergy + 1
			initialEnergy = 1
		}

		if (initialExperience <= experience[i]) {
			hours += experience[i] - initialExperience + 1
			initialExperience += experience[i] - initialExperience + 1
		}

		initialExperience += experience[i]
	}
	return hours
};
