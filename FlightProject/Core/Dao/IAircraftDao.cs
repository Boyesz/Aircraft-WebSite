using FlightProject.Core.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightProject.Core.Dao
{
    public interface IAircraftDao
    {
        Aircraft GetAircraft(int id);
        List<Aircraft> GetAircrafts();
        void CreateNewAircraft(Aircraft aircraft);
        void DeleteAircraft(int id);
        void UpdateAircraft(Aircraft aircraft);
    }
}
