using FlightProject.Core.Dao;
using FlightProject.Core.Exceptions;
using FlightProject.Core.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FlightProject.Dao
{
    public class AircraftDao : IAircraftDao
    {
        AircraftDbContext _context;
        ILogger<AircraftDao> logger;

        public AircraftDao(AircraftDbContext _context, ILogger<AircraftDao> logger)
        {
            this._context = _context;
            this.logger = logger;
        }

        public void CreateNewAircraft(Aircraft aircraft)
        {
            try
            {
                _context.Aircrafts.Add(aircraft);

                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }

        }

        public void DeleteAircraft(int id)
        {
            try
            {
                Aircraft aircraft = _context.Aircrafts.First(x => x.Id == id);

                _context.Aircrafts.Remove(aircraft);

                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }
        }

        public Aircraft GetAircraft(int id)
        {
            try
            {
                return _context.Aircrafts.First(x => x.Id == id);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }

            throw new StorageException();
        }

        public List<Aircraft> GetAircrafts()
        {
            try
            {
                return _context.Aircrafts.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }

            throw new StorageException();
        }

        public void UpdateAircraft(Aircraft aircraft)
        {
            try
            {
                Aircraft modAircraft = _context.Aircrafts.First(x => x.Id == aircraft.Id);

                modAircraft.Id = aircraft.Id;
                modAircraft.Name = aircraft.Name;
                modAircraft.Price = aircraft.Price;
                modAircraft.Manufacturer = aircraft.Manufacturer;
                modAircraft.Country = aircraft.Country;

                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }
        }
    }
}
