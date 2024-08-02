using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PinAdapter
{


  /// <summary>
  /// Rather than simple pass back the results of a API call directly in the body of the response, they
  /// are wrapped in a class that allows us to pass back metadata about the call. In cases of error, a
  /// list of erros can be returned, and in cases of success, other interesting data can be also
  /// returned.
  /// </summary>
  /// <typeparam name="T"></typeparam>
  [DataContract]
  public class RestWrapper<T>
  {

    public int StatusCode { get; set; }

    public string ErrorMessage { get; set; }

    public string InfoMessage { get; set; }

    public List<Link> Links { get; set; }

    public T Data { get; set; }

    public DateTime ExecutionDate { get; set; }

    public void AddLink(string name, string url)
    {
      if(Links == null)
      {
        Links = new List<Link>();
      }
      Link l = new Link();
      l.Name = name;
      l.URL = url;
      Links.Add(l);
    }
  }


  public class Link
  {      
    public string Name { get; set; }

    public string URL { get; set; }
  }

}
