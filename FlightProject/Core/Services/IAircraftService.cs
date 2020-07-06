using FlightProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightProject.Core.Services
{
    public interface IAircraftService
    {
        Task<Aircraft> GetAircraft(int id);
        Task<List<Aircraft>> GetAircrafts();
        void CreateNewAircraft(Aircraft aircraft);
        void DeleteAircraft(int id);
        void UpdateAircraft(Aircraft aircraft);
    }
}
