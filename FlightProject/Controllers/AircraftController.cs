using System.IO;
using System;
using System.Threading.Tasks;
using FlightProject.Core.Models;
using FlightProject.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace FlightProject.Controllers
{
    [Route("api/[controller]")]
    public class AircraftController : Controller
    {
        private readonly IAircraftService aircraftService;
        public AircraftController(IAircraftService aircraftService)
        {
            this.aircraftService = aircraftService;
        }

        [HttpGet]
        [Route("Aircrafts")]
        public async Task<IActionResult> GetAircrafts()
        {
            return Ok(await aircraftService.GetAircrafts());
        }

        [HttpGet]
        [Route("Aircraft/{aircraftId}")]
        public async Task<IActionResult> GetAircrafts(int aircraftId)
        {
            try
            {
                return Ok(await aircraftService.GetAircraft(aircraftId));
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }

        }

        [HttpPost]
        [Route("Aircraft")]
        public IActionResult CreateAircraft([FromBody] Aircraft aircraft)
        {
            try
            {
                aircraftService.CreateNewAircraft(aircraft);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }

        }

        [HttpDelete]
        [Route("Aircraft/{aircraftId}")]
        public IActionResult DeleteAircraft(int aircraftId)
        {
            try
            {
                aircraftService.DeleteAircraft(aircraftId);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPut]
        [Route("Aircraft")]
        public IActionResult UpdateAircraft([FromBody] Aircraft aircraft)
        {
            try
            {
                aircraftService.UpdateAircraft(aircraft);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}