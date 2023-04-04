exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('launchschedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('launchschedule').insert([
        { customer_id: 1, vehicle: 'Falcon 9', payload: 'Starlink 9000', launch_date: 'Sat Jul 24 2021 00:00:00 Z', user_id: 1, commander_approval: false },
        { customer_id: 2, vehicle: 'Atlas V', payload: 'NROL-101', launch_date: 'Fri Nov 13 2016 06:32:00 Z', user_id: 3, commander_approval: true, approval_date: 'Tue Nov 1 2016 06:00:00 Z' }
      ]);
    });
};