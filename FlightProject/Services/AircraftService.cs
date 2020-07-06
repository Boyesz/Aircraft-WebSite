using FlightProject.Core.Dao;
using FlightProject.Core.Models;
using FlightProject.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightProject.Services
{
    public class AircraftService : IAircraftService
    {

        IAircraftDao aircraftDao;

        public AircraftService(IAircraftDao aircraftDao)
        {
            this.aircraftDao = aircraftDao;
        }

        public void CreateNewAircraft(Aircraft aircraft)
        {
            aircraftDao.CreateNewAircraft(aircraft);
        }

        public void DeleteAircraft(int id)
        {
            aircraftDao.DeleteAircraft(id);
        }

        public Task<Aircraft> GetAircraft(int id)
        {
            return Task.Run(() => aircraftDao.GetAircraft(id));
        }

        public Task<List<Aircraft>> GetAircrafts()
        {
            return Task.Run(() => aircraftDao.GetAircrafts());
        }

        public void UpdateAircraft(Aircraft aircraft)
        {
            aircraftDao.UpdateAircraft(aircraft);
        }
    }
}
